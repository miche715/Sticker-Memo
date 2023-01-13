package com.example.stickermemoserver.api.memo.domain;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "MP_MEMO_USER")
public class MemoUserEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UUID")
    private Long uuid;

    @Column(name = "USER_USERNAME")
    private String username;

    @Column(name = "MEMO_UUID")
    private Long memoUuid;
}