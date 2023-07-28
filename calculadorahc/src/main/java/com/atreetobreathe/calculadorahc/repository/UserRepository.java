package com.atreetobreathe.calculadorahc.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.atreetobreathe.calculadorahc.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, String> {

}
