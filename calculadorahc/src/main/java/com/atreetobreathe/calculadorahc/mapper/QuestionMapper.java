package com.atreetobreathe.calculadorahc.mapper;

import com.atreetobreathe.calculadorahc.dto.QuestionDTO;
import com.atreetobreathe.calculadorahc.dto.QuestionDTOList;
import com.atreetobreathe.calculadorahc.entity.QuestionEntity;

import org.springframework.stereotype.Component;

@Component
public class QuestionMapper {
    public QuestionDTO entity2DTO(QuestionEntity entity){
        QuestionDTO dto = new QuestionDTO();
        dto.setQuestion(entity.getQuestion());
        dto.setAnswer1(entity.getAnswer1());
        dto.setAnswer2(entity.getAnswer2());
        dto.setAnswer3(entity.getAnswer3());
        dto.setAnswer4(entity.getAnswer4());
        dto.setAnswer5(entity.getAnswer5());
        dto.setValue1(entity.getValue1());
        dto.setValue2(entity.getValue2());
        dto.setValue3(entity.getValue3());
        dto.setValue4(entity.getValue4());
        dto.setValue5(entity.getValue5());
        return dto;
    }

    public QuestionEntity dto2Entity(QuestionDTO dto){
        QuestionEntity entity = new QuestionEntity();

        entity.setQuestion(dto.getQuestion());
        entity.setAnswer1(dto.getAnswer1());
        entity.setAnswer2(dto.getAnswer2());
        entity.setAnswer3(dto.getAnswer3());
        entity.setAnswer4(dto.getAnswer4());
        entity.setAnswer5(dto.getAnswer5());
        entity.setValue1(dto.getValue1());
        entity.setValue2(dto.getValue2());
        entity.setValue3(dto.getValue3());
        entity.setValue4(dto.getValue4());
        entity.setValue5(dto.getValue5());
        return entity;
    }

    public QuestionDTOList entity2DTOList(QuestionEntity entity){
        return new QuestionDTOList().setQuestion(entity.getQuestion())
                .setAnswer1(entity.getAnswer1())
                .setAnswer2(entity.getAnswer2())
                .setAnswer3(entity.getAnswer3())
                .setAnswer4(entity.getAnswer4())
                .setAnswer5(entity.getAnswer5());
    }
}
