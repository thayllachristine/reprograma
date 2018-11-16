## Mobile First
É quando se inicia o site através da tela mobile, é sempre do **menor para o maior** e utiliza-se `min-width` para definir o valor do `@media`.


```css
@media screen (min-width: 420px) {
    .elemento {
        propriedade: valor;
    }
}

@media (min-width: 768px) {
    .elemento {
        propriedade: valor;
    }
}

media (min-width: 1024px) {
    .elemento {
        propriedade: valor;
    }
}

```

----- 

## Desktop First 
É quando se inicia o site através da tela desktop, é sempre do **maior para o menor** e utiliza-se `max-width` para definir o valor do `@media`. 

```css
media screen (max-width: 1024px) {
    .elemento {
        propriedade: valor;
    }
}

@media screen (max-width: 768px) {
    .elemento {
        propriedade: valor;
    }
}

@media screen (max-width: 420px) { 
    .elemento {
        propriedade: valor;
    }
}
```

-----

### :warning: IMPORTANTE
É recomendado que a estrutura em HTML seja construída pensando em desktop first, já o CSS é sempre em mobile first.


-----

(**+**) Para saber mais: 
- https://zellwk.com/blog/how-to-write-mobile-first-css/