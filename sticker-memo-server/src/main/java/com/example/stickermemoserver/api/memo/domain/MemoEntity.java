package com.example.stickermemoserver.api.memo.domain;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "TB_MEMO")
public class MemoEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UUID")
    private Long uuid;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "TEXT")
    private String text;
}