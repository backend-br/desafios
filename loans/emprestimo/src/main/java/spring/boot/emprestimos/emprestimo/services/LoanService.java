package spring.boot.emprestimos.emprestimo.services;

import org.springframework.stereotype.Service;
import spring.boot.emprestimos.emprestimo.dto.LoanResponseDTO;
import spring.boot.emprestimos.emprestimo.dto.RequestLoanDTO;

import java.util.ArrayList;
import java.util.List;

@Service
public class LoanService {

    public List<LoanResponseDTO> determineLoans(RequestLoanDTO requestLoanDTO) {

        int age = requestLoanDTO.getAge();
        Double income = requestLoanDTO.getIncome();
        String location = requestLoanDTO.getLocation();

        List<LoanResponseDTO> loans = new ArrayList<>();

        if (income >= 3000 && income <= 5000 && age < 30 && "SP".equalsIgnoreCase(location)) {
            loans.add(new LoanResponseDTO("PERSONAL", 4));
            loans.add(new LoanResponseDTO("GUARANTEED", 3));
            loans.add(new LoanResponseDTO("CONSIGNMENT", 2));
        } else if (income <= 3000) {
            loans.add(new LoanResponseDTO("PERSONAL", 4));
            loans.add(new LoanResponseDTO("GUARANTEED", 3));
        } else if (income >= 5000) {
            loans.add(new LoanResponseDTO("CONSIGNMENT", 2));
        }


        return loans;
    }
}
