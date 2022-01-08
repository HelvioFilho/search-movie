import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { Container } from '../../atoms';
import { defaultTheme } from '../../../global';
import { ListStarProps, StarProps } from '../../../utils/interface';

export function StarIcon({ rate }: StarProps) {
  const [starRate, setStarRate] = useState<ListStarProps[]>([]);

  useEffect(() => {
    let isActive = true;
    function verifyLength(total: number, half: boolean): ListStarProps[] {
      let starArray = [], full = 0;

      while (full !== 10) {
        if (full < total) {
          starArray[full] = { id: full, type: 'md-star' };
          full++;
        } else if (half) {
          starArray[full] = { id: full, type: 'md-star-half' };
          half = false;
          full++;
        } else {
          starArray[full] = { id: full, type: 'md-star-outline' };
          full++;
        }
      }

      return starArray;

    }
    function getStars() {
      if (Number.isInteger(rate)) {
        setStarRate(verifyLength(rate, false));
      } else {
        setStarRate(verifyLength(Math.trunc(rate), true));
      }
    }

    if (isActive) {
      getStars();
    }

    return () => {
      isActive = false;
    }
  }, [rate]);

  return (
    <Container
      bg="bg"
      width="100%"
      height={40}
    >
      <FlatList
        horizontal
        data={starRate}
        keyExtractor={(item) => String(item.id)}
        renderItem={(data) => <Ionicons
          style={{ paddingHorizontal: 2 }}
          name={data.item.type as React.ComponentProps<typeof Ionicons>['name']}
          size={24}
          color={defaultTheme.colors.warning}
        />}
      />
    </Container>
  );
}