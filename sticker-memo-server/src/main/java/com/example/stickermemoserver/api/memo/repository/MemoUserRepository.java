package com.example.stickermemoserver.api.memo.repository;

import com.example.stickermemoserver.api.memo.domain.MemoUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemoUserRepository extends JpaRepository<MemoUserEntity, Long>
{

}