export interface ContactDTO {
  error: boolean;
  message: string;
  results: {
    midia_social: [
      {
        id: string;
        tipo: string;
        link: string;
      }
    ];
    contatos: {
      email_principal: string;
      emails: [
        {
          id: string;
          nome: string;
          email: string;
        }
      ];
      telefones: [
        {
          id: string;
          nome: string;
          telefone: string;
        }
      ];
    };
    enderecos: [
      {
        id: string;
        nome: string;
        endereco: string;
        bairro_cidade: string;
        telefone: string;
      }
    ];
    cnpj: string;
  };
}
