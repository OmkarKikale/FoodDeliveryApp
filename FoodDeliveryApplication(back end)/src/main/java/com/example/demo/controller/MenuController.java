package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dao.MenuRepository;
import com.example.demo.entity.Menu;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/menu")
public class MenuController {
    private final MenuRepository menuRepository;

    @Autowired
    public MenuController(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @GetMapping
    public List<Menu> getMenuItems() {
        return menuRepository.findAll();
    }

    @PostMapping
    public void addMenuItem(@RequestBody Menu menuItem) {
        menuRepository.save(menuItem);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Menu> updateMenuItem(@PathVariable Long id, @RequestBody Menu updatedMenu) {
        Menu existingMenu = menuRepository.findById(id).orElse(null);

        if (existingMenu == null) {
            return ResponseEntity.notFound().build();
        }

        // Update the properties of existingMenu using the updatedMenu object
        existingMenu.setName(updatedMenu.getName());
        existingMenu.setDescription(updatedMenu.getDescription());
        existingMenu.setPrice(updatedMenu.getPrice());
        existingMenu.setQuantity(updatedMenu.getQuantity());
        existingMenu.setImgurl(updatedMenu.getImgurl());

        // Save the updated menu to the database
        menuRepository.save(existingMenu);

        return ResponseEntity.ok(existingMenu);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenuItem(@PathVariable Long id) {
        Menu existingMenu = menuRepository.findById(id).orElse(null);

        if (existingMenu == null) {
            return ResponseEntity.notFound().build();
        }

        // Delete the menu from the database
        menuRepository.delete(existingMenu);

        return ResponseEntity.noContent().build();
    }
}
