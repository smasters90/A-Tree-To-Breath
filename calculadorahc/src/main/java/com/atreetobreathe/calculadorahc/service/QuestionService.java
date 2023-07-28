package com.atreetobreathe.calculadorahc.service;

import java.util.List;

import com.atreetobreathe.calculadorahc.dto.QuestionDTO;
import com.atreetobreathe.calculadorahc.dto.QuestionDTOList;

public interface QuestionService {

	QuestionDTO save(QuestionDTO questionDTO);

	QuestionDTO update(String id, QuestionDTO questionDTO);

	List<QuestionDTOList> getAll() throws Exception;

	void delete(String id);

}
