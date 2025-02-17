package com.artgalarysystem.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.artgalarysystem.entity.User;
import com.artgalarysystem.service.UserService;
import com.artgalarysystem.utility.Constants.UserStatus;

@Component
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		User user = this.userService.getUserByEmailAndStatus(email, UserStatus.ACTIVE.value());

		CustomUserDetails customUserDetails = new CustomUserDetails(user);

		return customUserDetails;

	}
}
