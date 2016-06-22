# \<epic-slider\>

A basic responsive banner/slider polymer component. Data is pushed as JSON to the 'slides' attribute.

## Example

```javascript
<epic-slider slides='[
{
  "name":"Event 1 Title",
  "teaser":"Event Subheading",
  "slug":"example-event-slug-1",
  "startAndEnd":"Jun 30 2015",
  "image":"https://images.contentful.com/1kzutnf7jc3r/6CDf5pkmCkygA6o086w6oE/a677c05dd7885ac9eae599a4ca664d14/hiking.jpg"
},
{
  "name":"Event 2 Title",
  "teaser":"Event 2 Subheading",
  "slug":"example-event-slug-2",
  "startAndEnd":"Jul 3 2015",
  "image":"https://images.contentful.com/1kzutnf7jc3r/5bpHVev0pOka4o2MEiMSWw/185ada80eb8228e016cd62fae7f1e695/cycle.jpg"
},   {
  "name":"Event 3 Title",
  "teaser":"Event 3 Subheading",
  "slug":"example-event-slug-3",
  "startAndEnd":"Dec 31 2016",
  "image":"https://images.contentful.com/1kzutnf7jc3r/5bpHVev0pOka4o2MEiMSWw/185ada80eb8228e016cd62fae7f1e695/cycle.jpg"
}
]' min-height="400px"></epic-slider>
```

## Properties

| Property   	  | Type  	| Default  	 | Description  	 |
| :---	          | :---	    | :---	       | :---	             |
| slides   	    | JSON  	| []  	| `[
{
  "name":"Event 1 Title",
  "teaser":"Event Subheading",
  "slug":"example-event-slug-1",
  "startAndEnd":"Jun 30 2015",
  "image":"https://images.contentful.com/1kzutnf7jc3r/6CDf5pkmCkygA6o086w6oE/a677c05dd7885ac9eae599a4ca664d14/hiking.jpg"
},
{
  "name":"Event 2 Title",
  "teaser":"Event 2 Subheading",
  "slug":"example-event-slug-2",
  "startAndEnd":"Jul 3 2015",
  "image":"https://images.contentful.com/1kzutnf7jc3r/5bpHVev0pOka4o2MEiMSWw/185ada80eb8228e016cd62fae7f1e695/cycle.jpg"
},   {
  "name":"Event 3 Title",
  "teaser":"Event 3 Subheading",
  "slug":"example-event-slug-3",
  "startAndEnd":"Dec 31 2016",
  "image":"https://images.contentful.com/1kzutnf7jc3r/5bpHVev0pOka4o2MEiMSWw/185ada80eb8228e016cd62fae7f1e695/cycle.jpg"
}
]`  	|
| min-height  	| String  	| '400px'  	| Minimum height for slides  	|
| autoSlide  	  |   	|   	|   	|
| slideTime  	  |   	|   	|   	|
| slideTransitionTime  	|   	|   	|   	|

slides (default empty)
min-height (default '400px')
autoSlide (default true)
slideTime (default 3000)
slideTransitionTime (default 400)
