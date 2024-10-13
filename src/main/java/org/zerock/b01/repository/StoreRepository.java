package org.zerock.b01.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.b01.domain.Place;
import org.zerock.b01.domain.Store;

public interface StoreRepository extends JpaRepository<Store, Long> {

}
