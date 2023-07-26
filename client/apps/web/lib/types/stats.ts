
export type Stats = {
  likes: string[];
  tweets: string[];
  updatedAt: any| null;
};

export const statsConverter: any = {
  toFirestore(bookmark) {
    return { ...bookmark };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);

    return { ...data } as Stats;
  }
};
