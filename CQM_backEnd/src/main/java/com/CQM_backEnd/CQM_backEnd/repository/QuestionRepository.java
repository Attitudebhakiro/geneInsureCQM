package com.CQM_backEnd.CQM_backEnd.repository;

import com.CQM_backEnd.CQM_backEnd.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

    List<Question> findByAgentName(String agentName);
}
