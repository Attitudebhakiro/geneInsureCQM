package com.CQM_backEnd.CQM_backEnd.service;

import com.CQM_backEnd.CQM_backEnd.model.Question;
import com.CQM_backEnd.CQM_backEnd.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository repository;

    //save agent question info
    public Question saveAgentQsn(Question question){
        return repository.save(question);
    }
    //save agents questions
    public List<Question> saveAgents(List<Question> questions){
        return repository.saveAll(questions);

    }
    //find agents questions by name
    public List<Question> getAgentQsns(String agentName){
        return repository.findByAgentName(agentName);
    }
}
