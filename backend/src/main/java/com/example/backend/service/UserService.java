package com.example.backend.service;

import com.example.backend.dto.UserDto;
import com.example.backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.backend.entity.User;

import java.util.Collections;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.getUsername(),
                        user.getPasswordHash(),
                        Collections.emptyList()
                )).orElseThrow(()->new UsernameNotFoundException("Пользователь не найден "+username));
    }
    @Transactional
    public void createUser(UserDto userdto) {
        if (userRepository.existsByUsername(userdto.getUsername())) {
            throw new IllegalArgumentException("login занят");
        }
        User user = new User();
        user.setUsername(userdto.getUsername());
        user.setPasswordHash(passwordEncoder.encode(userdto.getPassword()));
        user.setEmail(userdto.getEmail());
        userRepository.save(user);
    }
}
