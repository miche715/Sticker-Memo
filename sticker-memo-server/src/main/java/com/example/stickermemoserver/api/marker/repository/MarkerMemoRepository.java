package com.example.stickermemoserver.api.marker.repository;

import com.example.stickermemoserver.api.marker.domain.MarkerMemoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MarkerMemoRepository extends JpaRepository<MarkerMemoEntity, Long>
{
    List<MarkerMemoEntity> findAllByMemoUuid(Long memoUuid);
}