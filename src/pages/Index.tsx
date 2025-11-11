import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const workshops = [
    {
      id: 1,
      title: 'Вязание свитера для начинающих',
      description: 'Научитесь создавать уютный свитер с нуля. Подходит для новичков.',
      price: '3 500 ₽',
      duration: '4 занятия',
      level: 'Новичок',
      image: 'https://cdn.poehali.dev/projects/3ca9218a-c5ec-4b5e-9cfa-95b06984d731/files/58327986-42bc-49de-b78e-f9cb1fc36eba.jpg'
    },
    {
      id: 2,
      title: 'Ажурные узоры спицами',
      description: 'Освойте технику вязания красивых ажурных узоров.',
      price: '2 800 ₽',
      duration: '3 занятия',
      level: 'Средний',
      image: 'https://cdn.poehali.dev/projects/3ca9218a-c5ec-4b5e-9cfa-95b06984d731/files/4dcb75d0-42b2-4898-8773-c2b3b1f56515.jpg'
    },
    {
      id: 3,
      title: 'Кардиган в технике реглан',
      description: 'Создайте стильный кардиган с рукавами реглан.',
      price: '4 200 ₽',
      duration: '5 занятий',
      level: 'Продвинутый',
      image: 'https://cdn.poehali.dev/projects/3ca9218a-c5ec-4b5e-9cfa-95b06984d731/files/155fe185-d64c-4e06-b678-cc4de502a1f7.jpg'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Набор пряжи "Персиковый закат"',
      price: '1 850 ₽',
      description: '5 мотков мериносовой пряжи в тёплых оттенках',
      image: 'https://cdn.poehali.dev/projects/3ca9218a-c5ec-4b5e-9cfa-95b06984d731/files/155fe185-d64c-4e06-b678-cc4de502a1f7.jpg'
    },
    {
      id: 2,
      name: 'Спицы бамбуковые премиум',
      price: '890 ₽',
      description: 'Набор спиц размеры 3-8 мм',
      image: 'https://cdn.poehali.dev/projects/3ca9218a-c5ec-4b5e-9cfa-95b06984d731/files/4dcb75d0-42b2-4898-8773-c2b3b1f56515.jpg'
    },
    {
      id: 3,
      name: 'Готовый набор для кардигана',
      price: '3 200 ₽',
      description: 'Всё необходимое + схема вязания',
      image: 'https://cdn.poehali.dev/projects/3ca9218a-c5ec-4b5e-9cfa-95b06984d731/files/58327986-42bc-49de-b78e-f9cb1fc36eba.jpg'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '5 секретов идеальной резинки',
      date: '15 октября 2024',
      excerpt: 'Узнайте, как связать эластичную и красивую резинку для любого изделия.'
    },
    {
      id: 2,
      title: 'Как выбрать пряжу для зимнего свитера',
      date: '8 октября 2024',
      excerpt: 'Разбираемся в составах пряжи и выбираем идеальную для тёплых вещей.'
    },
    {
      id: 3,
      title: 'Уход за вязаными изделиями',
      date: '1 октября 2024',
      excerpt: 'Правильная стирка, сушка и хранение вязаных вещей продлят их жизнь.'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Что вижу, то вяжу</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'workshops', 'about', 'shop', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'workshops' && 'Мастер-классы'}
                  {section === 'about' && 'О мастере'}
                  {section === 'shop' && 'Магазин'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Создавайте уютные вещи своими руками
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Мастер-классы по вязанию для начинающих и профессионалов. 
                Обучающие материалы, готовые схемы и всё для вашего творчества.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('workshops')}>
                  Выбрать мастер-класс
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('shop')}>
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  В магазин
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/3ca9218a-c5ec-4b5e-9cfa-95b06984d731/files/155fe185-d64c-4e06-b678-cc4de502a1f7.jpg"
                alt="Вязание"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="workshops" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Мастер-классы</h2>
            <p className="text-lg text-muted-foreground">
              Выберите курс по своему уровню и начните создавать уже сегодня
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                <div className="h-48 overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{workshop.level}</Badge>
                    <span className="text-sm text-muted-foreground">{workshop.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{workshop.title}</CardTitle>
                  <CardDescription>{workshop.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{workshop.price}</span>
                  <Button>
                    Записаться
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/3ca9218a-c5ec-4b5e-9cfa-95b06984d731/files/4dcb75d0-42b2-4898-8773-c2b3b1f56515.jpg"
                  alt="О мастере"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">О мастере</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Здравствуйте! Меня зовут Анна, и я занимаюсь вязанием уже более 15 лет. 
                  За это время я обучила более 500 учеников искусству создания уютных вещей своими руками.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Моя миссия — показать, что вязание это не просто хобби, а способ создавать 
                  уникальные вещи, наполненные теплом и любовью. Каждое изделие рассказывает свою историю.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">учеников</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">мастер-классов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Магазин</h2>
            <p className="text-lg text-muted-foreground">
              Качественная пряжа, инструменты и готовые наборы для вязания
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button variant="outline" size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-lg text-muted-foreground">
              Советы, идеи и вдохновение для вязания
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mt-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="px-0">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
              <p className="text-lg text-muted-foreground">
                Есть вопросы? Напишите мне, и я с радостью отвечу!
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Анна" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="anna@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите, чем я могу помочь..." rows={5} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Вязание с душой</h3>
              <p className="text-sm text-muted-foreground">
                Мастер-классы и магазин для любителей вязания
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Разделы</h4>
              <div className="space-y-2 text-sm">
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('home')}>Главная</div>
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('workshops')}>Мастер-классы</div>
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('shop')}>Магазин</div>
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('blog')}>Блог</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@knitting.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Вязание с душой. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;