if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'When The Morning Dawns',
    author_id: '',
    category: 'Components',
    thumbnail: "http://placehold.it/240x135",
    demo_url: 'https://google.com',
    github_url: 'https://github.com',
    date: new Date(),
    last_updated: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeteritis, inquit, gaudeo. Dat enim intervalla et relaxat. Profectus in exilium Tubulus statim nec respondere ausus; An hoc usque quaque, aliter in vita? Duo Reges: constructio interrete. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio?'
  });
}