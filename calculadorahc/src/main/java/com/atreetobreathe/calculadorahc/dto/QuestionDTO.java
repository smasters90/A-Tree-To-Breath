package com.atreetobreathe.calculadorahc.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class QuestionDTO {

	private String question;
	private String answer1;
	private String answer2;
	private String answer3;
	private String answer4;
	private String answer5;
	private String value1;
	private String value2;
	private String value3;
	private String value4;
	private String value5;

}
