package com.example.stickermemoserver.api.marker.domain;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "TB_MARKER")
public class MarkerEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UUID")
    private Long uuid;

    @Column(name = "LATITUDE")
    private Double latitude;

    @Column(name = "LONGITUDE")
    private Double longitude;
}