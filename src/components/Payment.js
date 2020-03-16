import React from 'react';

const Payment = props => {
	const style = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	};
	return (
		<div style={style}>
			<h3>Insira os dados do Cartão</h3>
			<input type="text" placeholder="Nome Completo" />
			<input type="text" placeholder="Número do cartão" />
			<input type="month" placeholder="Data de validade" />
			<input type="text" placeholder="Número de segurança" />
		</div>
	);
}

export default Payment;