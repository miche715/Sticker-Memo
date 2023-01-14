package com.example.stickermemoserver.api.memo.repository;

import com.example.stickermemoserver.api.memo.domain.MemoUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemoUserRepository extends JpaRepository<MemoUserEntity, Long>
{
    List<MemoUserEntity> findAllByUsername(String username);
}