package com.example.stickermemoserver.api.marker.repository;

import com.example.stickermemoserver.api.marker.domain.MarkerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarkerRepository extends JpaRepository<MarkerEntity, Long>
{

}