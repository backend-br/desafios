package spring.boot.emprestimos.emprestimo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestLoanDTO {
    private int age;
    private String cpf;
    private String name;
    private Double income;
    private String location;
}
