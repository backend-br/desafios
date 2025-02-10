package spring.boot.emprestimos.emprestimo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.boot.emprestimos.emprestimo.dto.LoanResponseDTO;
import spring.boot.emprestimos.emprestimo.dto.RequestLoanDTO;
import spring.boot.emprestimos.emprestimo.services.LoanService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/customer-loans")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @PostMapping
    public Map<String, Object> getLoansController(@RequestBody RequestLoanDTO   requestLoanDTO) {

        List<LoanResponseDTO> loans = loanService.determineLoans(requestLoanDTO);

        Map<String, Object> response = new HashMap<>();
        response.put("customer", requestLoanDTO.getName());
        response.put("loans", loans);

        return response;
    }

}
