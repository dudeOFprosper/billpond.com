import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import Header from './components/Header';
import './App.css';

const Styles = StyleSheet.create({
  column: {
    width: "48%", 
  }, 
  content: {
    backgroundColor: '#fff',
    border: "5px solid #b44131",
    margin: "20px 0px",
    padding: "10px"
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="AppWrapper">
          <Header />
          <section className={css(Styles.column)}>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
          </section>
          <section className={css(Styles.column)}>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
            <div className={css(Styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed faucibus lectus. Nam consequat ultricies lorem sit amet ultrices. Vestibulum tempus purus vitae dignissim bibendum. Mauris lacinia vitae nibh nec rhoncus. Vestibulum accumsan dolor nisl. Nullam nec mauris tempor, dapibus ipsum vel, rhoncus nibh. Vivamus rutrum ex vel dui bibendum, vel posuere augue vehicula.
              In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam vehicula et nisl vitae finibus. Vestibulum vitae blandit nunc. Maecenas ac accumsan urna, sed consequat metus. Cras tincidunt euismod euismod. Nunc consectetur quam nec iaculis commodo.
              Nam at ex et purus vulputate aliquam eget vitae ex. Ut ullamcorper commodo nibh in porttitor. Curabitur rhoncus porta mollis. Cras id ultricies tellus. Mauris et aliquet mi, quis pretium nisi. Pellentesque ut nulla diam. Nunc fermentum nibh at orci hendrerit tempus nec et nunc. Curabitur dignissim metus vitae sapien cursus, faucibus tempus libero pulvinar. Nunc eget arcu auctor dui suscipit scelerisque. Curabitur dolor sem, commodo eu urna nec, gravida aliquam felis. Quisque in leo efficitur, volutpat est eu, faucibus elit. Vestibulum eget nulla elementum, lacinia mauris et, sodales erat. Vestibulum mauris purus, rutrum id sollicitudin nec, porta at est. Curabitur in pulvinar arcu. Suspendisse potenti. Etiam mattis turpis non mi posuere, ac euismod enim pulvinar.
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
