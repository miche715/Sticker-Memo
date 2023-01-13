package com.example.stickermemoserver.api.marker.domain;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "MP_MARKER_MEMO")
public class MarkerMemoEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UUID")
    private Long uuid;

    @Column(name = "MEMO_UUID")
    private Long memoUuid;

    @Column(name = "MARKER_UUID")
    private Long markerUuid;
}