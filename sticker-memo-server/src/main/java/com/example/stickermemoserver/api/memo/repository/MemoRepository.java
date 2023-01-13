package com.example.stickermemoserver.api.memo.repository;

import com.example.stickermemoserver.api.memo.domain.MemoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemoRepository extends JpaRepository<MemoEntity, Long>
{

}