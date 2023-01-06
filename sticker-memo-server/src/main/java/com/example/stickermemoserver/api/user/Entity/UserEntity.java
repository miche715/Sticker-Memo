package com.example.stickermemoserver.api.user.Entity;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "TB_USER")
public class UserEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UUID")
    private Long uuid;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "ROLE")
    private String role;
}