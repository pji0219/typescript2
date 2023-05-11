{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  // record: 두 타입을 묶을 때 사용
  const nav: Record<Page, PageInfo> = {
    home: { title: 'home' },
    about: { title: 'about' },
    contact: { title: 'contact' },
  };

  // 아래는 기타 유틸리티 타입
  type Animal = 'cat' | 'dog';
  type NewAnimal = Capitalize<Animal>; // 'Cat' | 'Dog'
  const animal: NewAnimal = 'Cat';
}
