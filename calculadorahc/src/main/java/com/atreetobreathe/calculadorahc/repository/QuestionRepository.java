package com.atreetobreathe.calculadorahc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.atreetobreathe.calculadorahc.entity.QuestionEntity;

public interface QuestionRepository extends JpaRepository<QuestionEntity, String> {

	@Query(value = "select * from questions where soft_deleted=0", nativeQuery = true)
	List<QuestionEntity> findAll();
}
