const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson(id, type) {
    return this[type].find((element) => element.id === id);
  },
  assignStudent(id, subject) {
    const student = this.findPerson(id, "students");
    const teacher = this.teachers.find((teacher) => {
      return teacher.subjects.includes(subject) && teacher.capacityLeft > 0;
    });
    if (teacher) {
      teacher.students.push(student);
      teacher.capacityLeft--;
    } else {
      console.log("Sorry, no available teachers left");
    }
  },
  assignTeachersSubject(id, subject) {
    const teacher = this.findPerson(id, "teachers");
    !teacher.subjects.includes(subject) ? teacher.subjects.push(subject) : null;
  },
  assignNewTeacher(name, subjects, capacity) {
    const id = this.teachers.length + 1;
    this.teachers.push({
      id,
      name,
      subjects,
      students: [],
      capacityLeft: capacity,
    });
  },
};
