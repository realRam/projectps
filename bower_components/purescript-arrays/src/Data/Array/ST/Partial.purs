-- | Partial functions for working with mutable arrays using the `ST` effect.
-- |
-- | This module is particularly helpful when performance is very important.

module Data.Array.ST.Partial
  ( peekSTArray
  , pokeSTArray
  ) where

import Control.Monad.Eff (Eff)
import Control.Monad.ST (ST)
import Data.Array.ST (STArray)
import Data.Unit (Unit)

-- | Read the value at the specified index in a mutable array.
foreign import peekSTArray
  :: forall a h r
   . Partial
  => STArray h a
  -> Int
  -> Eff (st :: ST h | r) a

-- | Change the value at the specified index in a mutable array.
foreign import pokeSTArray
  :: forall a h r
   . Partial
  => STArray h a
  -> Int
  -> a
  -> Eff (st :: ST h | r) Unit
