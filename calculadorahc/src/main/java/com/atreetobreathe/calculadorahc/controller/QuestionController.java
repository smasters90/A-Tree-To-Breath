package com.atreetobreathe.calculadorahc.controller;

import com.atreetobreathe.calculadorahc.dto.QuestionDTO;
import com.atreetobreathe.calculadorahc.service.impl.QuestionServiceImpl;
import com.atreetobreathe.calculadorahc.utility.GlobalConstants;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class QuestionController {

	@Autowired
	QuestionServiceImpl questionService;

	@PostMapping(GlobalConstants.Endpoints.QUESTION)
	public ResponseEntity<?> save(@RequestBody QuestionDTO questionDTO) {
		try {
			QuestionDTO question = questionService.save(questionDTO);
			return ResponseEntity.status(HttpStatus.CREATED).body(question);
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}

	}

	@GetMapping(GlobalConstants.Endpoints.QUESTION)
	public ResponseEntity<?> getAllQuestions() throws Exception {
		try {
			return new ResponseEntity<>(questionService.getAll(), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@DeleteMapping(GlobalConstants.Endpoints.QUESTION + "/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") String id) {
		try {

			if (id == null || id.isEmpty()) {
				throw new IllegalArgumentException("Id must not be null");
			}

			questionService.delete(id);
			return ResponseEntity.noContent().build();

		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body(e.getMessage());

		} catch (EntityNotFoundException e) {
			return ResponseEntity.notFound().build();

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

	}

	@PutMapping(GlobalConstants.Endpoints.QUESTION + "/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestBody QuestionDTO questionDTO) {
		try {
			if (id == null) {
				throw new IllegalArgumentException("Id must not be null");
			}
			questionService.update(id, questionDTO);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}

	}

}
