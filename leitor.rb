def lerSenha
    puts "Digite sua senha: \n"
    senha = gets.chomp
    if senha.length < 8
        puts "A senha deve ter pelo menos 8 caracteres."
        return false
    end
    if senha !~ /[A-Z]/
        puts "A senha deve conter pelo menos uma letra maiúscula."
        return false
    end
    if senha !~ /[a-z]/
        puts "A senha deve conter pelo menos uma letra minúscula."
        return false
    end
    if senha !~ /\d/
        puts "A senha deve conter pelo menos um dígito numérico."
        return false
    end
    if senha !~ /[!@#$%^&*(),.?":{}|<>]/
        puts "A senha deve conter pelo menos um caractere especial."
        return false
    end
    puts "Senha válida."
    return true
end

while lerSenha() === false do
    puts "Digite novamente sua senha: \n"
    lerSenha()
end