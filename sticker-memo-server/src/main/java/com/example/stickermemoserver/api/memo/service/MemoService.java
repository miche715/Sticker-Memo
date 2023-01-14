package com.example.stickermemoserver.api.memo.service;

import com.example.stickermemoserver.api.marker.domain.MarkerEntity;
import com.example.stickermemoserver.api.marker.service.MarkerService;
import com.example.stickermemoserver.api.memo.domain.MemoDto;
import com.example.stickermemoserver.api.memo.domain.MemoEntity;
import com.example.stickermemoserver.api.memo.domain.MemoUserEntity;
import com.example.stickermemoserver.api.memo.repository.MemoRepository;
import com.example.stickermemoserver.api.memo.repository.MemoUserRepository;
import com.example.stickermemoserver.response.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class MemoService
{
    private MemoRepository memoRepository;
    private MemoUserRepository memoUserRepository;
    private MarkerService markerService;

    @Autowired
    public MemoService(MemoRepository memoRepository, MemoUserRepository memoUserRepository, MarkerService markerService)
    {
        this.memoRepository = memoRepository;
        this.memoUserRepository = memoUserRepository;
        this.markerService = markerService;
    }

    public ResponseEntity<ResponseBody> writeMemo(String username, MemoDto memoDto)
    {
        ResponseBody responseBody;
        ResponseEntity<ResponseBody> responseEntity;

        MemoEntity memoEntity = new MemoEntity();
        memoEntity.setTitle(memoDto.getTitle());
        memoEntity.setText(memoDto.getText());
        Long memoUuid = memoRepository.save(memoEntity).getUuid();

        MemoUserEntity memoUserEntity = new MemoUserEntity();
        memoUserEntity.setUsername(username);
        memoUserEntity.setMemoUuid(memoUuid);
        memoUserRepository.save(memoUserEntity);

        markerService.addMarkers(memoUuid, memoDto.getLatitudes(), memoDto.getLongitudes());

        responseBody = new ResponseBody(true, "저장되었습니다.", null);
        responseEntity = ResponseEntity.status(HttpStatus.CREATED).body(responseBody);

        return responseEntity;
    }

    public ResponseEntity<ResponseBody> getMemoList(String username)
    {
        ResponseBody responseBody;
        ResponseEntity<ResponseBody> responseEntity;
        List<MemoDto> memoDtos = new ArrayList<>();

        for(MemoUserEntity memoUserEntity : memoUserRepository.findAllByUsername(username))
        {
            MemoEntity memoEntity = memoRepository.findById(memoUserEntity.getMemoUuid()).get();
            MemoDto memoDto = new MemoDto(memoEntity.getTitle(), memoEntity.getText(), new ArrayList<>(), new ArrayList<>());

            List<Double> latitudes = new ArrayList<>();
            List<Double> longitudes = new ArrayList<>();
            for(MarkerEntity markerEntity : markerService.getMarkers(memoEntity.getUuid()))
            {
                latitudes.add(markerEntity.getLatitude());
                longitudes.add(markerEntity.getLongitude());
            }
            memoDto.setLatitudes(latitudes);
            memoDto.setLongitudes(longitudes);

            memoDtos.add(memoDto);
        }

        responseBody = new ResponseBody(true, "메모 목록 불러왔습니다.", memoDtos);
        responseEntity = ResponseEntity.status(HttpStatus.OK).body(responseBody);

        return responseEntity;
    }
}