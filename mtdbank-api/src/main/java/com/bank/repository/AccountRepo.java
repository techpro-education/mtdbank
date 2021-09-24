package com.bank.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bank.model.Account;

public interface AccountRepo extends CrudRepository<Account, Long>{
	
	Account findByAccountNumber(Long accountNumber);
	
	List<Account> findAll();

}
