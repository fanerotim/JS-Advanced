function construtorCrew(obj) {

    if (obj.dizziness === true) {
        let curHydration = (obj.weight * 0.1) * obj.experience;
        obj.levelOfHydrated += curHydration;
        obj.dizziness = false;
        return obj;
        
    }
    return obj;      
}

construtorCrew({ 
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });