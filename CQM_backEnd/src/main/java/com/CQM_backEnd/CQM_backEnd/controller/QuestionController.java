package com.CQM_backEnd.CQM_backEnd.controller;

import com.CQM_backEnd.CQM_backEnd.model.Question;
import com.CQM_backEnd.CQM_backEnd.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class QuestionController {
    @Autowired
    private QuestionService service;

    //save agent question info
    @PostMapping("/saveAgentQsn")
    public Question saveAgent(@RequestBody Question question){
        return service.saveAgentQsn(question);
    }

    //save agents questions
    @PostMapping("/saveAgents")
    public List<Question> saveagents(@RequestBody List<Question> questions){
        return service.saveAgents(questions);

    }

    //find agents questions by name
    @GetMapping("/scores/{agentName}")
    public List<Question> AgentQsns(@PathVariable String agentName){
        return service.getAgentQsns(agentName);
    }
}
