# Taxa de congestionamento

O seu desafio será implementar um serviço que calcula a taxa de congestionamento cobrada dos veículos que entram e saem
de Gotemburgo, na Suécia. A cidade cobra a taxa em horários fixos, em pedágios espalhados pelo seu perímetro, e o valor
devido depende do tipo do veículo, do dia e do horário de cada passagem.

Desafio adaptado do [Congestion Tax Calculator](https://github.com/volvo-cars/congestion-tax-calculator), da Volvo Cars.

## Exemplo

O seu serviço recebe uma chamada com o tipo do veículo e as datas e horas em que ele passou pelos pedágios.

**[POST]** `{{host}}/congestion-taxes`

```json
{
    "vehicle": "CAR",
    "passages": [
        "2013-01-14 21:00:00",
        "2013-01-15 21:00:00",
        "2013-02-07 06:23:27",
        "2013-02-07 15:27:00",
        "2013-02-08 06:27:00",
        "2013-02-08 06:20:27",
        "2013-02-08 14:35:00",
        "2013-02-08 15:29:00",
        "2013-02-08 15:47:00",
        "2013-02-08 16:01:00",
        "2013-02-08 16:48:00",
        "2013-02-08 17:49:00",
        "2013-02-08 18:29:00",
        "2013-02-08 18:35:00",
        "2013-03-26 14:25:00",
        "2013-03-28 14:07:27"
    ]
}
```

E retorna o valor total da taxa devida:

```
HTTP/1.1 200 OK
```

```json
{
    "amount": 89,
    "currency": "SEK"
}
```

O total de SEK 89 vem da soma de cada dia:

| Dia                     | Valor  | Motivo                                                                      |
|:------------------------|:-------|:----------------------------------------------------------------------------|
| 2013-01-14 e 2013-01-15 | SEK 0  | As passagens acontecem fora do horário de cobrança.                         |
| 2013-02-07              | SEK 21 | Duas cobranças, de SEK 8 e de SEK 13.                                       |
| 2013-02-08              | SEK 60 | A cobrança única soma SEK 70 (8 + 13 + 18 + 18 + 13), acima do teto diário. |
| 2013-03-26              | SEK 8  | Uma cobrança.                                                               |
| 2013-03-28              | SEK 0  | Véspera de feriado (Sexta-feira Santa).                                     |

## Requisitos

- O valor máximo por dia e por veículo é de SEK 60.
- A taxa não é cobrada nos fins de semana (sábados e domingos), nos feriados, nas vésperas de feriado e durante o mês de
  julho.
- Os feriados de 2013 são 01/01, 06/01, 29/03, 31/03, 01/04, 01/05, 09/05, 19/05, 06/06, 22/06, 02/11, 25/12 e 26/12.
  O dia 31/12 é véspera do feriado de 01/01/2014.
- O valor de cada passagem segue a tabela de horários:

  | Horário     | Valor  |
  |:------------|:-------|
  | 06:00–06:29 | SEK 8  |
  | 06:30–06:59 | SEK 13 |
  | 07:00–07:59 | SEK 18 |
  | 08:00–08:29 | SEK 13 |
  | 08:30–14:59 | SEK 8  |
  | 15:00–15:29 | SEK 13 |
  | 15:30–16:59 | SEK 18 |
  | 17:00–17:59 | SEK 13 |
  | 18:00–18:29 | SEK 8  |
  | 18:30–05:59 | SEK 0  |

- Regra de cobrança única: um veículo que passa por vários pedágios dentro de 60 minutos é taxado apenas uma vez, pelo
  maior valor. A janela de 60 minutos começa na primeira passagem cobrada, e a primeira passagem cobrada depois dela
  abre uma nova janela.
- Veículos de emergência (`EMERGENCY`), ônibus (`BUS`), veículos diplomáticos (`DIPLOMAT`), motocicletas
  (`MOTORCYCLE`), veículos militares (`MILITARY`) e veículos estrangeiros (`FOREIGN`) são isentos.
- As passagens podem chegar fora de ordem.
- Você pode limitar o escopo ao ano de 2013.

## Bônus

O mesmo serviço passa a atender outras cidades, cada uma com as suas regras. Editores de conteúdo de cada cidade mantêm
esses parâmetros atualizados, então eles não podem ficar no código.

- Mova os parâmetros (tabela de horários, valor máximo diário, janela da cobrança única, dias e meses isentos, feriados
  e veículos isentos) para um armazenamento externo de sua escolha, lido pelo serviço em tempo de execução.
- A chamada passa a informar a cidade, como em `"city": "gothenburg"`.
- Caso a cidade não tenha regras cadastradas, retorne o código de status `HTTP 404 (Not Found)`.

## Soluções

Neste [tópico](SOLUTIONS.md), você encontrará soluções para esse desafio, feitas por outros membros da comunidade.
