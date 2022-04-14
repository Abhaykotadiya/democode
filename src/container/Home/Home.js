import React from 'react'

export default function Home({data}) {
  return (
      data.map((d,i) => {
          return (
              <p key = {d.id}>{d.name}</p>
          )
      })

  );
}
