package com.example.stickermemoserver.api.user.repository;

import com.example.stickermemoserver.api.user.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>
{
    UserEntity findByUsername(String username);
}