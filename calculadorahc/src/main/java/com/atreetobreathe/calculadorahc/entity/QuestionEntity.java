package com.atreetobreathe.calculadorahc.entity;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "questions")
@SQLDelete(sql = "UPDATE questions SET soft_deleted = true WHERE id = ?")
@Where(clause = "soft_deleted = false")
@NoArgsConstructor
@Getter
@Setter
public class QuestionEntity {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "uuid2")
	private String id;

	@Column(name = "question", nullable = false)
	private String question;

	@Column(name = "answer1", nullable = false)
	private String answer1;

	@Column(name = "answer2", nullable = false)
	private String answer2;

	@Column(name = "answer3", nullable = false)
	private String answer3;

	@Column(name = "answer4", nullable = false)
	private String answer4;

	@Column(name = "answer5", nullable = false)
	private String answer5;

	@Column(name = "value1", nullable = false)
	private String value1;

	@Column(name = "value2", nullable = false)
	private String value2;

	@Column(name = "value3", nullable = false)
	private String value3;

	@Column(name = "value4", nullable = false)
	private String value4;

	@Column(name = "value5", nullable = false)
	private String value5;

	@Column(name = "soft_deleted")
	private Boolean softDelete = Boolean.FALSE;

}
