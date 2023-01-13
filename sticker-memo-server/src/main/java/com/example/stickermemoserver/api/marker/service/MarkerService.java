package com.example.stickermemoserver.api.marker.service;

import com.example.stickermemoserver.api.marker.domain.MarkerEntity;
import com.example.stickermemoserver.api.marker.domain.MarkerMemoEntity;
import com.example.stickermemoserver.api.marker.repository.MarkerMemoRepository;
import com.example.stickermemoserver.api.marker.repository.MarkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MarkerService
{
    private MarkerRepository markerRepository;
    private MarkerMemoRepository markerMemoRepository;

    @Autowired
    public MarkerService(MarkerRepository markerRepository, MarkerMemoRepository markerMemoRepository)
    {
        this.markerRepository = markerRepository;
        this.markerMemoRepository = markerMemoRepository;
    }

    public void addMarker(Long memoUuid, List<Double> latitudes, List<Double> longitudes)
    {
        for(int i = 0; i < latitudes.size(); i++)
        {
            MarkerEntity markerEntity = new MarkerEntity();
            markerEntity.setLatitude(latitudes.get(i));
            markerEntity.setLongitude(longitudes.get(i));
            Long markerUuid = markerRepository.save(markerEntity).getUuid();

            MarkerMemoEntity markerMemoEntity = new MarkerMemoEntity();
            markerMemoEntity.setMemoUuid(memoUuid);
            markerMemoEntity.setMarkerUuid(markerUuid);
            markerMemoRepository.save(markerMemoEntity);
        }
    }
}