package com.artgalarysystem;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.artgalarysystem.entity.User;
import com.artgalarysystem.service.UserService;
import com.artgalarysystem.utility.Constants.UserRole;
import com.artgalarysystem.utility.Constants.UserStatus;

@SpringBootApplication
public class ArtGalarySystemApplication implements CommandLineRunner {
	
	private final Logger LOG = LoggerFactory.getLogger(ArtGalarySystemApplication.class);

	@Autowired
	private UserService userService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(ArtGalarySystemApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		User admin = this.userService.getUserByEmailIdAndRoleAndStatus("admin@gmail.com",
				UserRole.ROLE_ADMIN.value(), UserStatus.ACTIVE.value());

		if (admin == null) {

			LOG.info("Admin not found in system, so adding default admin");

			User user = new User();
			user.setEmailId("admin@gmail.com");
			user.setPassword(passwordEncoder.encode("Pass@123"));
			user.setRole(UserRole.ROLE_ADMIN.value());
			user.setStatus(UserStatus.ACTIVE.value());

			this.userService.addUser(user);

		}

	}

}
