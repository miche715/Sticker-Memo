package com.example.stickermemoserver.api.marker.repository;

import com.example.stickermemoserver.api.marker.domain.MarkerMemoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarkerMemoRepository extends JpaRepository<MarkerMemoEntity, Long>
{
}
