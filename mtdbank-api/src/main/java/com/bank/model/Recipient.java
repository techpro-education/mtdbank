package com.bank.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
public class Recipient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private Integer phone;
	private String bankName;
	private String bankNumber;

	@ManyToOne
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user;

	public Recipient() {
	};

	public Recipient(String name, String email, Integer phone, String bankName, String bankNumber) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.bankName = bankName;
		this.bankNumber = bankNumber;
	}
}
