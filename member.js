function skillsMember() {
  return {
    skills: ['Javascript', 'React', 'Node'],
    showSkills() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}