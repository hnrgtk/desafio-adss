import React, { Component } from "react";

import Axios from "axios";
import Payment from "./Payment";

var parcelas = [];
var parcelasTotal = [];
var comissao = [
	30.0,
	40.0,
	50.0,
	60.0,
	70.0,
	80.0,
	90.0,
	100.0,
	110.0,
	120.0,
	130.0,
	140.0
];
var aux = 0;

class Borrow extends Component {
	constructor() {
		super();
		this.state = {
			value: 0
		};

		this.valor = this.state.value;
	}
	sendToApi = () => {
		const value = this.state.value;
		this.setState({ value: value });
		this.valor = this.state.value;
	};

	handleInputValue = event => {
		const value = parseFloat(event.target.value);
		if (value < 300) {
			this.setState({ value: 300 });
		} else if (value > 10000) {
			this.setState({ value: 10000 });
		} else {
			this.setState({ value: value });
		}
	};

	confirm = (parcelas, parcelasTotal, valor, comissao, resultado) => {
		Axios.post("http://localhost:3000/values", {
			parcelas: parcelas,
			parcelasTotal: parcelasTotal,
			valor: valor,
			comissao: comissao,
			cpf: resultado
		}).then(console.log("pegou"));
	};


	render() {
		return (
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
				<label>Valor Desejado</label>
				<input
					type="number"
					step="0.01"
					min="300"
					max="10000"
					onChange={this.handleInputValue}
				/>
				<button onClick={this.sendToApi}>Calcular</button>
				<table>
					<thead>
						<th>Parcelas</th>
						<th>Juros da Parcela</th>
						<th>Valor Parcela</th>
						<th>Valor Total</th>
						<th>Comissão Parceiro</th>
					</thead>
					<tbody>
						<tr
							onClick={() =>
								this.confirm(
									parcelas[0],
									parcelasTotal[0],
									this.valor,
									comissao[0],
									this.resultado
								)
							}
						>
							<td>1</td>
							<td>15%</td>
							<td>R$ {(parcelas[0] = this.valor + this.valor * 0.15)}</td>
							<td>R$ {(parcelasTotal[0] = parcelas[0])}</td>
							<td>R$ {comissao[0]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[1],
								parcelasTotal[1],
								this.valor,
								comissao[1],
								this.resultado
							)
						}>
							<td>2</td>
							<td>30%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.3),
										(parcelas[1] = aux / 2))
								}
							</td>
							<td>R$ {(parcelasTotal[1] = parcelas[1] * 2)}</td>
							<td>R$ {comissao[1]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[2],
								parcelasTotal[2],
								this.valor,
								comissao[2],
								this.resultado
							)
						}>
							<td>3</td>
							<td>32%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.32),
										(parcelas[2] = aux / 3),
										(parcelas[2] = Math.round(parcelas[2])))
								}
							</td>
							<td>R$ {(parcelasTotal[2] = parcelas[2] * 3)}</td>
							<td>R$ {comissao[2]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[3],
								parcelasTotal[3],
								this.valor,
								comissao[3],
								this.resultado
							)
						}>
							<td>4</td>
							<td>34%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.34),
										(parcelas[3] = aux / 4),
										(parcelas[3] = Math.round(parcelas[3])))
								}
							</td>
							<td>R$ {(parcelasTotal[3] = parcelas[3] * 4)}</td>
							<td>R$ {comissao[3]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[4],
								parcelasTotal[4],
								this.valor,
								comissao[4],
								this.resultado
							)
						}>
							<td>5</td>
							<td>36%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.36),
										(parcelas[4] = aux / 5),
										(parcelas[4] = Math.round(parcelas[4])))
								}
							</td>
							<td>R$ {(parcelasTotal[4] = parcelas[4] * 5)}</td>
							<td>R$ {comissao[4]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[5],
								parcelasTotal[5],
								this.valor,
								comissao[5],
								this.resultado
							)
						}>
							<td>6</td>
							<td>38%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.38),
										(parcelas[5] = aux / 6),
										(parcelas[5] = Math.round(parcelas[5])))
								}
							</td>
							<td>R$ {(parcelasTotal[5] = parcelas[5] * 6)}</td>
							<td>R$ {comissao[5]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[6],
								parcelasTotal[6],
								this.valor,
								comissao[6],
								this.resultado
							)
						}>
							<td>7</td>
							<td>40%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.4),
										(parcelas[6] = aux / 7),
										(parcelas[6] = Math.round(parcelas[6])))
								}
							</td>
							<td>R$ {(parcelasTotal[6] = parcelas[6] * 7)}</td>
							<td>R$ {comissao[6]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[7],
								parcelasTotal[7],
								this.valor,
								comissao[7],
								this.resultado
							)
						}>
							<td>8</td>
							<td>42%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.42),
										(parcelas[7] = aux / 8),
										(parcelas[7] = Math.round(parcelas[7])))
								}
							</td>
							<td>R$ {(parcelasTotal[7] = parcelas[7] * 8)}</td>
							<td>R$ {comissao[7]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[8],
								parcelasTotal[8],
								this.valor,
								comissao[8],
								this.resultado
							)
						}>
							<td>9</td>
							<td>44%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.44),
										(parcelas[8] = aux / 9),
										(parcelas[8] = Math.round(parcelas[8])))
								}
							</td>
							<td>R$ {(parcelasTotal[8] = parcelas[8] * 9)}</td>
							<td>R$ {comissao[8]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[9],
								parcelasTotal[9],
								this.valor,
								comissao[9],
								this.resultado
							)
						}>
							<td>10</td>
							<td>46%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.46),
										(parcelas[9] = aux / 10),
										(parcelas[9] = Math.round(parcelas[9])))
								}
							</td>
							<td>R$ {(parcelasTotal[9] = parcelas[9] * 10)}</td>
							<td>R$ {comissao[9]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[10],
								parcelasTotal[10],
								this.valor,
								comissao[10],
								this.resultado
							)
						}>
							<td>11</td>
							<td>48%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.48),
										(parcelas[10] = aux / 11),
										(parcelas[10] = Math.round(parcelas[10])))
								}
							</td>
							<td>R$ {(parcelasTotal[10] = parcelas[10] * 11)}</td>
							<td>R$ {comissao[10]}</td>
						</tr>
						<tr onClick={() =>
							this.confirm(
								parcelas[11],
								parcelasTotal[11],
								this.valor,
								comissao[11],
								this.resultado
							)
						}>
							<td>12</td>
							<td>50%</td>
							<td>
								R${" "}
								{
									((aux = this.valor + this.valor * 0.5),
										(parcelas[11] = aux / 12),
										(parcelas[11] = Math.round(parcelas[11])))
								}
							</td>
							<td>R$ {(parcelasTotal[11] = parcelas[11] * 12)}</td>
							<td>R$ {comissao[11]}</td>
						</tr>
					</tbody>
				</table>
				{/* <Payment /> */}
			</div>
		);
	}
}

export default Borrow;
