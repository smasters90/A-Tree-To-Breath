package com.atreetobreathe.calculadorahc.service.impl;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atreetobreathe.calculadorahc.dto.QuestionDTO;
import com.atreetobreathe.calculadorahc.dto.QuestionDTOList;
import com.atreetobreathe.calculadorahc.entity.QuestionEntity;
import com.atreetobreathe.calculadorahc.mapper.QuestionMapper;
import com.atreetobreathe.calculadorahc.repository.QuestionRepository;
import com.atreetobreathe.calculadorahc.service.QuestionService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class QuestionServiceImpl implements QuestionService {
	@Autowired
	QuestionMapper questionMapper;

	@Autowired
	QuestionRepository questionRepository;

	@Override
	public QuestionDTO save(QuestionDTO questionDTO) throws EntityNotFoundException, IllegalArgumentException {
		QuestionEntity newQuestion = questionMapper.dto2Entity(questionDTO);
		QuestionEntity questionSave = questionRepository.save(newQuestion);
		return questionMapper.entity2DTO(questionSave);
	}

	@Override
	public QuestionDTO update(String id, QuestionDTO questionDTO) {
		Optional<QuestionEntity> optionalQuestion = questionRepository.findById(id);
		if (optionalQuestion.isPresent()) {
			QuestionEntity question = optionalQuestion.get();

			// Update the properties of the question entity if the corresponding values in
			// questionDTO are not null
			if (questionDTO.getQuestion() != null) {
				question.setQuestion(questionDTO.getQuestion());
			}
			if (questionDTO.getAnswer1() != null) {
				question.setAnswer1(questionDTO.getAnswer1());
			}
			if (questionDTO.getAnswer2() != null) {
				question.setAnswer2(questionDTO.getAnswer2());
			}
			if (questionDTO.getAnswer3() != null) {
				question.setAnswer3(questionDTO.getAnswer3());
			}
			if (questionDTO.getAnswer4() != null) {
				question.setAnswer4(questionDTO.getAnswer4());
			}
			if (questionDTO.getAnswer5() != null) {
				question.setAnswer5(questionDTO.getAnswer5());
			}
			if (questionDTO.getValue1() != null) {
				question.setValue1(questionDTO.getValue1());
			}
			if (questionDTO.getValue2() != null) {
				question.setValue2(questionDTO.getValue2());
			}
			if (questionDTO.getValue3() != null) {
				question.setValue3(questionDTO.getValue3());
			}
			if (questionDTO.getValue4() != null) {
				question.setValue4(questionDTO.getValue4());
			}
			if (questionDTO.getValue5() != null) {
				question.setValue5(questionDTO.getValue5());
			}

			QuestionEntity updatedQuestion = questionRepository.save(question);
			return questionMapper.entity2DTO(updatedQuestion);

		} else {
			throw new IllegalArgumentException("Question not found with ID: " + id);
		}
	}

	@Override
	public List<QuestionDTOList> getAll() throws Exception {
		List<QuestionDTOList> questionDTOS = new LinkedList<>();
		for (QuestionEntity question : questionRepository.findAll()) {
			questionDTOS.add(questionMapper.entity2DTOList(question));
		}
		return questionDTOS;
	}

	@Override
	public void delete(String id) {
		Optional<QuestionEntity> optionalQuestion = questionRepository.findById(id);
		if (optionalQuestion.isPresent()) {
			QuestionEntity question = optionalQuestion.get();
			question.setSoftDelete(true);
			questionRepository.save(question);
		} else {
			throw new IllegalArgumentException("Question not found with ID: " + id);
		}
	}

}
